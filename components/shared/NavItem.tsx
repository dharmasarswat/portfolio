import { motion } from 'framer-motion';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isHovered: boolean;
  mouseX: number;
  index: number;
  onClick: () => void;
  onHover: (index: number | null) => void;
  onMouseMove: (e: React.MouseEvent) => void;
}

export const NavItem = ({
  icon,
  label,
  isHovered,
  mouseX,
  index,
  onClick,
  onHover,
  onMouseMove,
}: NavItemProps) => {
  return (
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full px-1"
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12 hover:px-1"
        onHoverStart={() => onHover(index)}
        onHoverEnd={() => onHover(null)}
        animate={{
          width: isHovered ? 60 : 36,
          x: isHovered ? (mouseX - window.innerWidth / 2) / 30 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        {icon}
        {isHovered && (
          <motion.span
            className="absolute top-16 text-sm bg-white text-black dark:bg-accent dark:text-white px-3 py-1 rounded-md shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
