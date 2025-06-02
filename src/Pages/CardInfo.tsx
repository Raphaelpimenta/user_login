interface CardInfo {
    text: string
    mainContent: string
    content: string
}
export const CardInfo = ({text, mainContent, content}: CardInfo) => {
    return (
        <>
        <h3>{text}</h3>
        <b>{mainContent}</b>
        <p>{content}</p>
        </>
    )
}