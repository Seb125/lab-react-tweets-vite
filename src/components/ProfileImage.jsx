



function Image({url}) {
    
    console.log(url)
    
    return (
        <img
        src={url.url}
        className="profile"
        alt="profile"
      />
    )
}

export default Image;