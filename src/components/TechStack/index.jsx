import Card from './Card';
import card_data from "./card_data";

function TechStack() {

    return (
        <div className='bg-primary'>
            <div className="flex flex-wrap justify-center p-8 gap-16 gap-y-4">
                {
                    card_data.map((data, index) => (
                        <Card
                            className="ts-card"
                            key={index}
                            svg={data.svg}
                            title={data.title}
                        />
                    ))
                }
            </div>
        </div>
    );

}

export default TechStack;
