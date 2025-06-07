export default function Spinner() {
    return (
        <div className="fixed inset-0 bg-[#131417] bg-opacity-80 flex items-center justify-center z-50">
            <div className="w-25 h-25 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
    )
}
