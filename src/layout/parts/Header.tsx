function header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="mx-auto flex flex-col items-center">

                <span className="text-xl font-semibold mb-4">شبيك لبيك</span>

                <div className="flex items-center">
                    <input type="text" className="w-full px-4 py-2 bg-gray-700 text-white rounded-r-full" placeholder="مطعم, متجر, منتج ..." />
                        <button className="px-4 py-2 bg-green-500 text-white rounded-l-full">بحث</button>
                </div>
            </div>
        </header>
    )
}

export default header