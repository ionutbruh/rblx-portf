import Card from './Card';
import card_data from "./card_data";

function TechStack() {
 
    return (
        <div className='bg-primary'>
            <div className="flex flex-wrap justify-center p-8 space-x-14">
                {
                    card_data.map((data, index) => (
                        <Card
                            className="ts-card"
                            key={index}
                            src={data.src}
                            title={data.title}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TechStack;
