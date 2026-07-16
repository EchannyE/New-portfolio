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

    const variantStyles = (() => {
        switch (variant) {
            case 'primary':
                return 'bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600 hover:to-pink-500 shadow-md shadow-pink-200 dark:shadow-pink-900/30';
            case 'outline':
                return 'border border-pink-500/60 bg-transparent text-pink-600 dark:text-pink-400 hover:bg-pink-500 hover:text-white';
            case 'secondary':
                return 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600';
            case 'danger':
                return 'bg-red-500 text-white hover:bg-red-600';
            default:
                return 'bg-gradient-to-r from-pink-500 to-pink-400 text-white';
        }
    })();

    const sizeStyles = (() => {
        switch (size) {
            case 'sm': return 'px-3 py-1.5 text-sm';
            case 'md': return 'px-4 py-2 text-base';
            case 'lg': return 'px-6 py-3 text-lg';
            default: return 'px-4 py-2 text-base';
        }
    })();

    const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`.trim();

    return (
        <Component className={buttonClasses} {...props}>
            {children ?? title}
        </Component>
    );
};

export default Button;