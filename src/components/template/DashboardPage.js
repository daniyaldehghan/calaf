async function DashboardPage({ createdAt }) {
  return (
    <div className=" flex flex-col gap-4">
      <h3 className="text-sm lg:text-2xl dark:text-black"> سلام👋</h3>
      <p className="dark:text-black">
        بازی های خودرا برای فروش راحت و سریع ثبت کنید تا هزاران نفر آن را مشاهده
        کنند!
      </p>
      <div className="flex gap-4 dark:text-gray-600">
        <p>تاریخ عضویت:</p>
        <span>{new Date(createdAt).toLocaleDateString("fa")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
