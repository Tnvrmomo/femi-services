
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  category: {
    id: string;
    name: string;
    count: number;
  };
  isActive: boolean;
  onClick: () => void;
}

const CategoryItem = ({ category, isActive, onClick }: CategoryItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between py-2 px-3 rounded-lg text-left transition-colors",
        isActive 
          ? "bg-rose-50 text-rose-600 font-medium" 
          : "hover:bg-muted text-muted-foreground hover:text-foreground"
      )}
    >
      <span>{category.name}</span>
      <span className={cn(
        "text-xs rounded-full px-2 py-1",
        isActive 
          ? "bg-white text-rose-600" 
          : "bg-muted-foreground/10 text-muted-foreground"
      )}>
        {category.count}
      </span>
    </button>
  );
};

export default CategoryItem;
