export function Filter () {
    const categories=['Laptops','Gaming','Accessories','Peripherals','Storage','Components','Monitors','Printers','Product Section'];

    return (
    <div>
        { categories.map((category,index) => (
            <button class="b2" key={index}>{category}</button>
        ))}
    </div>
    );
}