
import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
    return (
        <div className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        "I'm currently available to take on new projects.",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'So feel free to send me a message about anything that you want me to work on.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    //deletionSpeed={80}
                    omitDeletionAnimation
                    repeat={Infinity}
                />
            </div>
            <img src="/pic.jpg" alt="" />
        </div>
    )
}

export default Speech 