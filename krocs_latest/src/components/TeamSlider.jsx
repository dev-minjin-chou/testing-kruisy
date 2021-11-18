import member1 from "../assets/images/arts/1_Of_1-13.jpg"
import member2 from "../assets/images/arts/1_of_1-30.jpg"
import member3 from "../assets/images/arts/1_Of_1-28.jpg"
import member4 from "../assets/images/arts/1_Of_1-24.jpg"

const OurTeam = () => {
    const images = [
        { name: '@KRUISY DEV', role: 'Programming Executive ', img: member1 },
        { name: '@KRUISY MATE', role: 'Head of Marketing', img: member2 },
        { name: '@Kruisy One', role: 'Operations Manager', img: member3 },
        { name: '@Artsy Kroc', role: 'Art Genius', img: member4 },
    ]
    return (
        <section id="team">
            <div className="sec-heading-wrapper">
                <h1 className="sec-heading" data-aos="zoom-out">Our Team</h1>
            </div>
            <div className="team-wrapper cs_row">
                {images.map((data, ind) => {
                    return (
                        <div data-aos key={ind} className="team-card cs_row cs_column">
                            <img src={data.img} alt={data.name} />
                            <h2>{data.name}</h2>
                            <p>{data.role}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default OurTeam

