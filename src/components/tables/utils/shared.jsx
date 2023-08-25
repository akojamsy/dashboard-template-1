export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("active") ? "bg-green-100 text-green-700" : null,
        status.startsWith("inactive") ? "bg-yellow-100 text-yellow-700" : null,
        status.startsWith("offline") ? "bg-red-100 text-red-700" : null
      )}
    >
      {status}
    </span>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className='flex items-center'>
      <div className='flex-shrink-0 h-10 w-10'>
        <img
          className='h-10 w-10 rounded-full'
          src={row.original[column.imgAccessor]}
          alt=''
        />
      </div>
      <div className='ml-4'>
        <div className='text-sm font-medium text-gray-900'>{value}</div>
        <div className='text-sm text-gray-500'>
          {row.original[column.emailAccessor]}
        </div>
      </div>
    </div>
  );
}
