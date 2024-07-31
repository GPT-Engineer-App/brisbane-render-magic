import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const fetchGeneratedImage = async (prompt) => {
  // This is a mock function. In a real application, you would call your image generation API here.
  // For now, we'll return a placeholder URL
  return `https://via.placeholder.com/400x300.png?text=${encodeURIComponent(prompt)}`;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: images } = useQuery({
    queryKey: ['galleryImages'],
    queryFn: async () => {
      const imagePrompts = [
        "Modern rendered house exterior",
        "Contemporary rendered house facade",
        "Stylish rendered house design",
        "Elegant rendered house front",
        "Sleek rendered house architecture",
        "Minimalist rendered house style"
      ];
      return Promise.all(imagePrompts.map(async (prompt, index) => ({
        id: index + 1,
        src: await fetchGeneratedImage(prompt),
        alt: `Rendered house ${index + 1}`
      })));
    },
  });

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg cursor-pointer"
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
