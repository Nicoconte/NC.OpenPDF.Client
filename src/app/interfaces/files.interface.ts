interface IFile {
    id: number, 
    filename: string,
    extension: string, 
    path: string,
    size: number,
    uploaded_at: string
}

export default IFile;