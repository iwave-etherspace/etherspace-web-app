const ContentCell = ({cStart,rStart,cSpan,rSpan,children}) => {
    let classStr = "";
    if(typeof(cStart) == "number"){
        classStr = classStr+" col-start-"+cStart;
    }
    if(typeof(rStart) == "number"){
        classStr = classStr+" row-start-"+rStart;
    }
    if(typeof(cSpan) == "number"){
        classStr = classStr+" col-span-"+cSpan;
    }
    if(typeof(rSpan) == "number"){
        classStr = classStr+" row-span-"+rSpan;
    }
    //Note: content-cell class applies h-full to all children. See dashboard.css
    return (
    <div className={classStr+" content-cell"}>
        {children}
    </div>
    )
}

export default ContentCell