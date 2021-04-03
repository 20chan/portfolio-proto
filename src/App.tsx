import React, { useState } from 'react';
import { Container, Dropdown, Header, Icon, Label, List, Segment } from 'semantic-ui-react';
import { priorities, Tag, projects } from './data';

function App() {
  const allTags = Object.values(Tag);
  const [tagsSelected, setTagsSelected] = useState<string[]>(allTags);
  const tagsNotSelected = allTags.filter(x => !tagsSelected.includes(x));

  const selectProjects = projects.filter(x => x.tags.find(y => tagsSelected.includes(y)));

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
              <Label color='blue' key={x}>
                {x}
                <Icon name='delete' link onClick={() => handleDeleteTag(x)} />
              </Label>
            </>)
          }
          {
            tagsNotSelected.map(x => <>
              <Label key={x}>
                {x}
                <Icon name='plus' link onClick={() => handleAddTag(x)} />
              </Label>
            </>)
          }
        </Segment>

        <Header content={`projects ${selectProjects.length}/${projects.length}`} textAlign='center' attached='top' block />
        <Segment attached>
          <List>
            {
              selectProjects.map(x => <>
                <List.Item>
                  <List.Content>
                    <List.Header as='a'>
                      {x.name}
                    </List.Header>
                    <List.Description>
                      {x.description}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </>)
            }
          </List>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
