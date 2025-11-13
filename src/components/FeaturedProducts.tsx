import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 3.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    category: "Clothes",
    price: 24.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    price: 79.99,
    rating: 4.9,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 129.99,
    rating: 4.7,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
  },
  {
    id: 5,
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 2.49,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400",
  },
  {
    id: 6,
    name: "Denim Jacket",
    category: "Clothes",
    price: 89.99,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
  },
  {
    id: 7,
    name: "Leather Boots",
    category: "Shoes",
    price: 149.99,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400",
  },
  {
    id: 8,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.6,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our best-selling items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
