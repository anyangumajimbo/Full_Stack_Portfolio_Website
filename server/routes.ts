import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the CV download
  app.get('/api/cv', (req, res) => {
    const cvPath = path.join(process.cwd(), 'attached_assets', 'MAJIMBOCV.pdf');
    
    // Check if file exists
    if (fs.existsSync(cvPath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=MAJIMBO_ANYANGU_CV.pdf');
      
      // Create a read stream and pipe it to the response
      const fileStream = fs.createReadStream(cvPath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ error: 'CV file not found' });
    }
  });

  // Contact form submission endpoint (mock - would save to DB in real application)
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // In a real application, you would save this data and send an email
    // For now, just return success
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. I will get back to you soon!' 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
