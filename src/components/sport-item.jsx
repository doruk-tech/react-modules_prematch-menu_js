

export const SportItem = (
    {
        sport,
    }
) => {
    return (
        <div>
            <span>{sport.n}</span>
            <span>{sport.mc} / {sport.oc}</span>
        </div>
    );
}