import { ReactNode } from 'react';

interface HomepageProps {
    children: ReactNode;
}

const Homepage: React.FC<HomepageProps> = ({ children }) => {
    return (
        <div>
            <section className="content">
                {children}
            </section>
        </div>
    );
};

export default Homepage;