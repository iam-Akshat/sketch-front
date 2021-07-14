import { useState } from "react";
import uploadImg from "../api/uploadImg";
import download from 'downloadjs';
import { useBoard } from "../context/BoardContext";

const FileDownloadButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const { boardRef } = useBoard();
    const handleClick = (e) => {
        setIsLoading(true)
        boardRef.current.toBlob(async (blob) => {
            try {
                const imgData = await uploadImg(blob)
                download(imgData, 'file.pdf', 'application/pdf')
                setIsLoading(false)
                setIsSuccess(true)
                setTimeout(() => { setIsSuccess(false) }, 2000)
            } catch (error) {
                setError(true)
            }
        })
    }
    return (
        <>
            {error && <div className='error-msg'>Some error occured,please refresh and try again</div>}
            <button className='download-btn' type='button' onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Processing your download' : isSuccess ? 'Downloaded!!' : 'Download now!'}
            </button>
        </>
    )
}

export default FileDownloadButton;