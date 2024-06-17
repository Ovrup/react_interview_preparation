import React from 'react';
import { useNavigate } from 'react-router-dom';
import { files } from './data';
import FileExplorer from './FileExplorer';
import './folder.css'

export default function FolderComponent() {

    const navigate = useNavigate()

    return (
        <div className='folder-container'>
            <div className='folder-header'>
                <h2>File Explorer</h2>
                <button onClick={() => navigate(-1)} className='button-success'>Back</button>
            </div>
            <div className='folder-tree'>
                {files.map((file) => {
                    return <FileExplorer file={file} />
                })}
            </div>
        </div>
    )
}
