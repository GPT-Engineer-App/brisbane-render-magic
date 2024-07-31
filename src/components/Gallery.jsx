import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const fetchGalleryImages = async () => {
  // In a real application, this would be an API call
  return [
    { id: 1, src: "/images/rendered-house-1.jpg", alt: "Modern rendered house exterior" },
    { id: 2, src: "/images/rendered-house-2.jpg", alt: "Contemporary rendered house facade" },
    { id: 3, src: "/images/rendered-house-3.jpg", alt: "Elegant rendered house front" },
    { id: 4, src: "/images/rendered-house-4.jpg", alt: "Sleek rendered house architecture" },
    { id: 5, src: "/images/rendered-house-5.jpg", alt: "Stylish rendered house design" },
    { id: 6, src: "/images/rendered-house-6.jpg", alt: "Minimalist rendered house style" },
  ];
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: images, isLoading, isError } = useQuery({
    queryKey: ['galleryImages'],
    queryFn: fetchGalleryImages,
  });

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Work</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
          ))}
        </div>
      ) : isError ? (
        <div className="text-center text-red-500">Error loading images. Please try again later.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images && images.map((image) => (
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
      )}
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