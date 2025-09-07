const ContentCell = ({className,children}) => {
    //Note: content-cell class applies h-full to all children. See dashboard.css
    return (
    <div className={"content-cell "+className}>
        {children}
    </div>
    )
}

export default ContentCell