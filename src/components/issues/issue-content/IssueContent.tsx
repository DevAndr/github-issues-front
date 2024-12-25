import './styles.scss'
import ReactMarkdown from 'react-markdown';

interface IssueContentProps {
  content: string
}

function IssueContent({content}: IssueContentProps) {
  return <div className='content-issue'>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
}

export default IssueContent;