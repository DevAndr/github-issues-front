interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return <h1 className='font-bold'>{title}</h1>;
}

export default PageTitle;