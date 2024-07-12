import './section-header.scss';

type HeaderProps = {
    title: String;
    description?: String;
};
export function SectionHeader({ title, description }: HeaderProps) {
    return (
        <div className="heading-container">
            <h2>{title}</h2>
            <h3 className="hint">{description}</h3>
        </div>
    );
}
