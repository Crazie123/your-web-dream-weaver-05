import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, ShoppingCart, Heart, Share2, TruckIcon, ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock product data - in a real app, this would come from an API
const allProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 3.99,
    rating: 4.8,
    reviews: 124,
    description: "Fresh organic tomatoes grown locally without pesticides. Perfect for salads, cooking, and snacking. Rich in vitamins and antioxidants.",
    images: [
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800",
      "https://images.unsplash.com/photo-1546470427-e26264be0b0e?w=800",
      "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=800",
    ],
    inStock: true,
    details: ["100% Organic", "Locally Sourced", "Farm Fresh", "No Pesticides"],
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    category: "Clothes",
    price: 24.99,
    rating: 4.6,
    reviews: 89,
    description: "Premium quality cotton t-shirt with a comfortable fit. Perfect for casual wear and everyday comfort. Available in multiple colors.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800",
    ],
    inStock: true,
    details: ["100% Cotton", "Machine Washable", "Pre-shrunk", "Sizes: S-XXL"],
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    price: 79.99,
    rating: 4.9,
    reviews: 267,
    description: "High-performance running shoes designed for comfort and durability. Features advanced cushioning technology and breathable mesh upper.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
    ],
    inStock: true,
    details: ["Breathable Mesh", "Cushioned Sole", "Lightweight", "Multiple Sizes"],
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 129.99,
    rating: 4.7,
    reviews: 432,
    description: "Premium wireless earbuds with active noise cancellation and superior sound quality. Long battery life and comfortable fit for all-day wear.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800",
    ],
    inStock: true,
    details: ["Noise Cancellation", "30hr Battery", "Bluetooth 5.0", "IPX4 Water Resistant"],
  },
  {
    id: 5,
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 2.49,
    rating: 4.5,
    reviews: 76,
    description: "Crisp, fresh broccoli packed with nutrients. Perfect for steaming, roasting, or adding to your favorite dishes.",
    images: [
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800",
      "https://images.unsplash.com/photo-1553921558-783d4d01c1e6?w=800",
      "https://images.unsplash.com/photo-1628773822990-202e9de00c7e?w=800",
    ],
    inStock: true,
    details: ["Rich in Vitamins", "Fresh Daily", "Organic Option", "Farm to Table"],
  },
  {
    id: 6,
    name: "Denim Jacket",
    category: "Clothes",
    price: 89.99,
    rating: 4.8,
    reviews: 156,
    description: "Classic denim jacket with a modern fit. A versatile piece that pairs well with any outfit. Durable construction for long-lasting wear.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800",
    ],
    inStock: true,
    details: ["Premium Denim", "Classic Fit", "Multiple Pockets", "Sizes: XS-XL"],
  },
  {
    id: 7,
    name: "Leather Boots",
    category: "Shoes",
    price: 149.99,
    rating: 4.9,
    reviews: 203,
    description: "Handcrafted leather boots built to last. Comfortable, stylish, and perfect for any occasion. Premium leather construction.",
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800",
      "https://images.unsplash.com/photo-1542834281-0e5abcb9c18a?w=800",
    ],
    inStock: true,
    details: ["Genuine Leather", "Handcrafted", "Cushioned Insole", "Sizes: 6-13"],
  },
  {
    id: 8,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.6,
    reviews: 324,
    description: "Advanced smartwatch with fitness tracking, heart rate monitoring, and smartphone notifications. Stay connected and healthy.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800",
    ],
    inStock: true,
    details: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day Battery"],
  },
];

const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely love this product! Quality is outstanding and delivery was fast.",
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    rating: 4,
    date: "1 month ago",
    comment: "Great value for money. Exactly as described. Would definitely recommend!",
  },
  {
    id: 3,
    author: "Emma Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5,
    date: "1 month ago",
    comment: "Exceeded my expectations! The quality is exceptional and it arrived well-packaged.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-border">
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3 mb-6">
                {product.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <TruckIcon className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">100% protected</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{review.author}</h4>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-primary text-primary" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(relatedProduct.rating)
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({relatedProduct.reviews})
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      ${relatedProduct.price}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
