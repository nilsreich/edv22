
export const Sidebar = ({
  parentcallback, data, active
}: any) => {
  return <>
  <div className="px-4 text-sm font-semibold pt-4">Stationen</div>
  <ul>
    {Object.keys(data).map((item, key) => <li className={` px-4 py-1 ${(active === item) ? 'text-blue-500 font-medium' : ''}`} key={item} onClick={parentcallback}>
      {item}
    </li>)}
  </ul>
  </>;
};
