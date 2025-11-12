import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import vegetablesImg from "@/assets/category-vegetables.jpg";
import clothesImg from "@/assets/category-clothes.jpg";
import shoesImg from "@/assets/category-shoes.jpg";
import electronicsImg from "@/assets/category-electronics.jpg";

const categories = [
  {
    name: "Fresh Vegetables",
    description: "Organic and farm-fresh produce delivered daily",
    image: vegetablesImg,
    itemCount: "500+ Items",
  },
  {
    name: "Fashion & Clothes",
    description: "Trendy styles for every occasion",
    image: clothesImg,
    itemCount: "1000+ Items",
  },
  {
    name: "Shoes Collection",
    description: "Step up your style game",
    image: shoesImg,
    itemCount: "350+ Items",
  },
  {
    name: "Electronics",
    description: "Latest tech and gadgets",
    image: electronicsImg,
    itemCount: "450+ Items",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our diverse collection of products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground mb-3">
                  {category.description}
                </p>
                <span className="text-sm font-semibold text-primary">
                  {category.itemCount}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
