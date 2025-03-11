
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Services', icon: '✨' },
  { id: 'beauty', name: 'Beauty & Makeup', icon: '💄' },
  { id: 'skincare', name: 'Skincare', icon: '✨' },
  { id: 'spa', name: 'Spa & Massage', icon: '💆‍♀️' },
  { id: 'cakes', name: 'Cakes & Desserts', icon: '🍰' },
  { id: 'events', name: 'Event Planning', icon: '🎉' },
  { id: 'decor', name: 'Home Décor', icon: '🏠' },
  { id: 'fashion', name: 'Fashion', icon: '👗' },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container-custom">
        <div className="flex items-center justify-center mb-10">
          <div className="h-[1px] bg-muted flex-1"></div>
          <h2 className="font-serif text-2xl text-center mx-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-500" />
            <span>Browse Categories</span>
            <Sparkles className="h-5 w-5 text-gold-500" />
          </h2>
          <div className="h-[1px] bg-muted flex-1"></div>
        </div>

        <div className="flex overflow-x-auto pb-4 scrollbar-none snap-x">
          <div className="flex gap-4 mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`snap-start flex-shrink-0 flex flex-col items-center space-y-3 group transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'scale-105' 
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                <div 
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-to-br from-rose-100 to-lavender-100 border-2 border-gold-200' 
                      : 'bg-white border border-muted group-hover:border-gold-200/50'
                  }`}
                >
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <span className={`text-sm font-medium ${
                  activeCategory === category.id 
                    ? 'text-foreground' 
                    : 'text-muted-foreground'
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/categories"
            className="inline-block text-rose-600 hover:text-rose-700 font-medium hover:underline transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
