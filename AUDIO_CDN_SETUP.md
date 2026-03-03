# Audio CDN Setup Guide

## Overview
The Go Lion website music player is configured to stream audio files from a CDN. This guide explains how to set up your audio files.

## CDN Options

### Recommended CDN Services
1. **Cloudflare R2** - S3-compatible, no egress fees
2. **AWS S3 + CloudFront** - Industry standard, highly scalable
3. **DigitalOcean Spaces** - Simple and affordable
4. **Backblaze B2** - Low-cost storage with CDN partnership
5. **BunnyCDN** - Fast and affordable
6. **Netlify Large Media** - If hosting on Netlify

## Audio File Specifications

### Recommended Format
- **Format**: MP3 (widely supported)
- **Bitrate**: 320kbps (high quality) or 192kbps (smaller file size)
- **Sample Rate**: 44.1kHz
- **Channels**: Stereo

### File Naming Convention
```
artist-name-track-title.mp3
```

Example:
```
golion-burn-the-throne.mp3
golion-rise-again.mp3
golion-liberation-day.mp3
```

## Setup Instructions

### Step 1: Prepare Audio Files
1. Export your tracks as MP3 files with the recommended specifications
2. Name files using the convention above
3. Ensure files are optimized for web delivery

### Step 2: Upload to CDN

#### Example: AWS S3 + CloudFront
```bash
# Install AWS CLI
aws configure

# Upload files
aws s3 cp golion-burn-the-throne.mp3 s3://your-bucket-name/audio/
aws s3 cp golion-rise-again.mp3 s3://your-bucket-name/audio/
aws s3 cp golion-liberation-day.mp3 s3://your-bucket-name/audio/

# Set public read permissions
aws s3api put-object-acl --bucket your-bucket-name --key audio/golion-burn-the-throne.mp3 --acl public-read
```

#### Example: Cloudflare R2
1. Go to Cloudflare Dashboard > R2
2. Create a bucket (e.g., "golion-audio")
3. Upload your MP3 files
4. Configure public access
5. Get your public URL pattern

### Step 3: Configure CORS (Important!)

Your CDN bucket must allow CORS for the audio player to work. Add this CORS policy:

```json
{
  "CORSRules": [
    {
      "AllowedOrigins": ["*"],
      "AllowedMethods": ["GET", "HEAD"],
      "AllowedHeaders": ["*"],
      "MaxAgeSeconds": 3600
    }
  ]
}
```

### Step 4: Update the Music Player

Edit `src/components/MusicPlayer.jsx` and update the track URLs:

```javascript
const tracks = [
  {
    title: 'Burn the Throne',
    artist: 'Go Lion',
    url: 'https://your-cdn-url.com/golion-burn-the-throne.mp3',
    duration: 342
  },
  {
    title: 'Rise Again',
    artist: 'Go Lion',
    url: 'https://your-cdn-url.com/golion-rise-again.mp3',
    duration: 304
  },
  {
    title: 'Liberation Day',
    artist: 'Go Lion',
    url: 'https://your-cdn-url.com/golion-liberation-day.mp3',
    duration: 393
  },
];
```

### Step 5: Get Track Durations

To get exact track durations in seconds:

```bash
# Using ffprobe (part of FFmpeg)
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 golion-burn-the-throne.mp3
```

Or use an online tool or your audio editing software.

## Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open browser console and check for any CORS errors

3. Test all player controls:
   - ✅ Play/Pause
   - ✅ Skip Forward/Back
   - ✅ Volume Control
   - ✅ Progress Bar (click to seek)
   - ✅ Auto-advance to next track

## Security Considerations

### Content Protection
- Use signed URLs for premium content
- Implement token-based authentication
- Consider HLS streaming for additional protection

### Hotlink Protection
Configure your CDN to only allow requests from your domain:

```nginx
# Example nginx config
if ($http_referer !~ "^https://yourdomain.com") {
    return 403;
}
```

## Performance Optimization

### Browser Caching
Set appropriate cache headers:
```
Cache-Control: public, max-age=31536000, immutable
```

### Preloading
The player uses `preload="metadata"` to load only track info, not the entire file.

### CDN Settings
- Enable HTTP/2 or HTTP/3
- Use compression (gzip/brotli) for metadata
- Configure multiple edge locations

## Troubleshooting

### Audio Won't Play
1. Check browser console for CORS errors
2. Verify URLs are accessible (test in new browser tab)
3. Check audio file format compatibility
4. Ensure HTTPS is used (HTTP may be blocked)

### Slow Loading
1. Check audio file size (compress if >10MB)
2. Verify CDN is serving from nearest edge location
3. Test CDN response time

### Playback Stuttering
1. Increase bitrate quality (may be too compressed)
2. Check network connection
3. Verify CDN bandwidth limits

## Example CDN URLs

Once configured, your URLs should look like:

**CloudFront:**
```
https://d1234567890.cloudfront.net/audio/golion-burn-the-throne.mp3
```

**Cloudflare R2:**
```
https://pub-abc123def456.r2.dev/golion-burn-the-throne.mp3
```

**BunnyCDN:**
```
https://your-pull-zone.b-cdn.net/audio/golion-burn-the-throne.mp3
```

## Cost Estimates

Based on 1,000 plays/month of 13 tracks (~60 min total):

| Provider | Storage | Bandwidth | Monthly Cost |
|----------|---------|-----------|--------------|
| Cloudflare R2 | ~$0.01 | $0.00 | **~$0.01** |
| AWS S3 + CloudFront | ~$0.02 | ~$0.85 | **~$0.87** |
| BunnyCDN | ~$0.01 | ~$0.01 | **~$0.02** |
| DigitalOcean Spaces | Included | Included | **$5.00** (minimum) |

## Need Help?

For issues specific to:
- **Audio files**: Contact your audio engineer
- **CDN setup**: Check your CDN provider's documentation
- **Player bugs**: Check browser console and create an issue

---

**Made with ❤️ for Go Lion**
