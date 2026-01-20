#!/bin/bash

# Source image path
SOURCE_IMG="/home/jimmy/.gemini/antigravity/brain/70e810a2-22d3-4bc8-8884-b2e05f8eb4b3/heart_wireframe_base_1768864550754.png"
DEST_DIR="public/frames"

# Ensure destination directory exists
mkdir -p "$DEST_DIR"

# Loop to create 240 frames
for i in {0..239}
do
    # Format number with leading zeros (e.g., 001, 010, 100) - wait, naming is ezgif-frame-[i].jpg
    # The requirement said "ezgif-frame-[i].jpg", usually ezgif output is 0-indexed without padding or with padding.
    # I'll stick to simple indexing or padded? Let's assume standard ezgif which is usually frame_001. 
    # The user said `ezgif-frame-[i].jpg`. I will use 3 digit padding to be safe as that's standard for sequences.
    # If the code uses simple numbers, I'll adjust the code. Let's use 3 digit padding.
    
    printf -v PAD_NUM "%03d" $i
    cp "$SOURCE_IMG" "$DEST_DIR/ezgif-frame-${PAD_NUM}.jpg"
done

echo "Generated 240 frames in $DEST_DIR"
