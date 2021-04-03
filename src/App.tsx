import React, { useState } from 'react';
import { Container, Dropdown, Header, Icon, Label, Segment } from 'semantic-ui-react';
import { priorities, Tag, projects } from './data';

function App() {
  const allTags = Object.values(Tag);
  const [tagsSelected, setTagsSelected] = useState<string[]>(allTags);
  const tagsNotSelected = allTags.filter(x => !tagsSelected.includes(x));

  const handleDeleteTag = (tag: string) => {
    const tags = tagsSelected.filter(x => x !== tag);
    setTagsSelected(tags);
  };

  const handleAddTag = (tag: string) => {
    setTagsSelected([tag, ...tagsSelected]);
  };

  return (
    <div>
      <Header as='h1' content='portfolio page - prototype' style={{ marginTop: '3em' }} textAlign='center' />
      <Header as='h3' content='20chan (2@0chan.dev)' textAlign='center' />

      <Container>
        <Header content='tags' textAlign='center' attached='top' block />
        <Segment attached>
          {
            tagsSelected.map(x => <>
              <Label color='blue'>
                {x}
                <Icon name='delete' link onClick={() => handleDeleteTag(x)} />
              </Label>
            </>)
          }
          {
            tagsNotSelected.map(x => <>
              <Label>
                {x}
                <Icon name='plus' link onClick={() => handleAddTag(x)} />
              </Label>
            </>)
          }
        </Segment>
      </Container>
    </div>
  );
}

export default App;
