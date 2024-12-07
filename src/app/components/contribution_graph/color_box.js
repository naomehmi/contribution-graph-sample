export default function ColorBox ({ color }) {
    return (
        <div className="w-3 md:w-2 lg:w-4 h-3 md:h-2 lg:h-3 rounded md:rounded-sm lg:rounded" style={{ backgroundColor: color }}></div>
    );
}