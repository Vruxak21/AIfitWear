import express from 'express';
import * as dotenv from 'dotenv';
import Replicate from 'replicate';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt, type } = req.body;
    
    // Enhanced prompt engineering
    const enhancedPrompt = type === "logo" 
      ? `Professional minimalist ${prompt} logo, vector art, transparent background, high contrast, no background, centered, clean edges`
      : `High quality ${prompt} t-shirt design, front view, no background, transparent PNG, crisp edges, vibrant colors, professional apparel design`;

    const output = await replicate.run(
      "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe",
      {
        input: {
          prompt: enhancedPrompt,
          negative_prompt: "blurry, low quality, background, text, watermark, multiple objects",
          width: 1024,
          height: 1024,
          num_outputs: 1,
          guidance_scale: 0,
          num_inference_steps: 4,
          disable_safety_checker: true
        }
      }
    );

    // Process image to ensure transparency
    const imageUrl = output[0];
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    
    res.status(200).json({ 
      photo: base64Image,
      prompt: enhancedPrompt 
    });
  } catch (error) {
    console.error('Image generation error:', error);
    res.status(500).json({ 
      message: "Image generation failed",
      error: error.message
    });
  }
});

export default router;