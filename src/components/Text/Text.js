const Text = (props) => {
  const { children, Wrapper = 'div' } = props;
  const text = children.split(';').join('\n');
  return <Wrapper style={{ whiteSpace: 'pre-line' }}>{text}</Wrapper>;
};

export default Text;
