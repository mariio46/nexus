import { cn } from '@/lib/utils/tailwind-merge';
import * as icons from '@tabler/icons-react';
import type { TablerIconsProps } from '@tabler/icons-react';

interface IconProps extends TablerIconsProps {
    className?: string;
    name: keyof typeof icons;
}

export const Icon = ({ className, name, ...props }: IconProps) => {
    const TablerIcon = icons[name] as React.FC<TablerIconsProps>;
    return <TablerIcon className={cn('h-5 w-5 stroke-[1.5]', className)} {...props} />;
};
