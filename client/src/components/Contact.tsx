import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';

interface ContactInfo {
  icon: IconName;
  title: string;
  content: string;
}

interface SocialLink {
  icon: ['fab', string];
  url: string;
  bgColor: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: 'map-marker-alt',
    title: 'Location',
    content: 'Haile Selassie Avenue, Nairobi, Kenya'
  },
  {
    icon: 'envelope',
    title: 'Email',
    content: 'majimboanyangu50@gmail.com'
  },
  {
    icon: 'phone-alt',
    title: 'Phone',
    content: '+254 746 954 120'
  },
  {
    icon: 'globe',
    title: 'Languages',
    content: 'English, French, Kiswahili'
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: ['fab', 'linkedin-in'],
    url: '#',
    bgColor: 'bg-[#0077B5]'
  },
  {
    icon: ['fab', 'twitter'],
    url: '#',
    bgColor: 'bg-[#1DA1F2]'
  },
  {
    icon: ['fab', 'github'],
    url: '#',
    bgColor: 'bg-[#211F1F]'
  },
  {
    icon: ['fab', 'facebook-f'],
    url: '#',
    bgColor: 'bg-[#4267B2]'
  }
];

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    // In a real application, this would send the form data to a server
    console.log(data);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    form.reset();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have a project in mind or interested in collaboration? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 reveal">
          <div className="md:w-1/2">
            <Card className="bg-gray-50 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div className="flex items-start" key={index}>
                      <div className="bg-primary text-white rounded-full p-3 mr-4">
                        <FontAwesomeIcon icon={info.icon} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url} 
                        className={`${social.bgColor} text-white p-3 rounded-full hover:opacity-80 transition-opacity`}
                        aria-label={`Follow on ${social.icon[1]}`}
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your name" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter subject" 
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Type your message here" 
                              rows={5}
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-semibold transition-colors w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
