const Button = ({
    title,
    children,
    variant = 'primary',
    size = 'md',
    className,
    as: Component = 'button',
    ...props
}) => {
    let baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900';

    let variantStyles = '';
    switch (variant) {
        case 'primary':
            variantStyles = 'bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600 hover:to-pink-500 shadow-md shadow-pink-200 dark:shadow-pink-900/30';
            break;
        case 'outline':
            variantStyles = 'border border-pink-500/60 bg-transparent text-pink-600 dark:text-pink-400 hover:bg-pink-500 hover:text-white';
            break;
        case 'secondary':
            variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600';
            break;
        case 'danger':
            variantStyles = 'bg-red-500 text-white hover:bg-red-600';
            break;
        default:
            variantStyles = 'bg-gradient-to-r from-pink-500 to-pink-400 text-white';
    }

    let sizeStyles = '';
    switch (size) {
        case 'sm': sizeStyles = 'px-3 py-1.5 text-sm'; break;
        case 'md': sizeStyles = 'px-4 py-2 text-base'; break;
        case 'lg': sizeStyles = 'px-6 py-3 text-lg'; break;
        default: sizeStyles = 'px-4 py-2 text-base';
    }

    const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`.trim();

    return (
        <Component className={buttonClasses} {...props}>
            {children ?? title}
        </Component>
    );
};

export default Button;