'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
    med?: boolean;
    login?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    login,
    med
}) => {
    return ( 
        <div onClick={onClick} className={`px-4 py-3  transition font-semibold 
        ${med ? 'font-medium' : 'font-semibold'}
        ${med && 'text-[#3B414F]'}
        ${login && 'text-[#3B414F]'}
        ${login && 'cursor-pointer'}
        ${login && 'hover:text-neutral-600'}
        ${med ? '' : 'hover:bg-neutral-100'}
        `}>
            {label}
        </div>
     );
}
 
export default MenuItem;