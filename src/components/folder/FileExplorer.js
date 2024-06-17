import React, { useState } from 'react'

export default function FileExplorer({ file }) {

    const [showSubFolder, setShowSubFolder] = useState(false);

    if (!file.isFolder) {
        return <h4>{file.name}</h4>
    }

    return <>
        <div
            className={`folder-name`}
            onClick={() => setShowSubFolder((prev) => !prev)}>
            <div className={`${showSubFolder ? "expanded" : "collapsed"}`}></div>
            <h3>{file.name}</h3>
        </div>
        {file.subFolder.map((subFile) => {
            return showSubFolder ? <div style={{ paddingLeft: "25px" }}><FileExplorer file={subFile} /></div> : ""
        })}
    </>

}
