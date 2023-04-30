'use client';

interface HeadingProps extends React.HTMLAttributes<HTMLSpanElement>{
    title: string;
    subtitle?: string;
    center?: boolean;
    big?: boolean;
    
    
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center,
    big
}) => {
    return ( 
        <div className={center ? 'text-center' : 'text-right'}>
            <div className={` font-bold ${big ? 'text-[64px]' : 'text-2xl'} `}>
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2 ">
                {subtitle}
            </div>
        </div>
     );
}
 
export default Heading;