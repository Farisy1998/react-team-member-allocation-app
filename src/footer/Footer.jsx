const Footer = () => {
    const currentDate = new Date();

    return <div className="footer">
        <h4>Team Member Allocation app - {currentDate.getFullYear()}</h4>
    </div>
}

export default Footer;