import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


const aiTopics = [
  {
    title: 'ChatBots',
    description: 'Explore how AI-driven chatbots simulate conversations and enhance user engagement across platforms.',
  },
  {
    title: 'Prompt Engineering',
    description: 'Learn how crafting effective prompts can dramatically improve AI responses and model performance.',
  },
  {
    title: 'ChatGPT',
    description: 'A conversational AI model by OpenAI capable of generating human-like text and solving complex tasks.',
  },
  {
    title: 'DeepSeek',
    description: 'An open-source LLM optimized for reasoning and coding, offering a unique alternative to GPT models.',
  },
  {
    title: 'Other LLMs',
    description: 'Discover other large language models like Claude, Gemini, Mistral, and Meta’s LLaMA family.',
  },
];

const ArtificialIntelligenceComponent = () => {
  return (
    <div className="ai-page container py-4">
      <h1 className="mb-4 text-center">Artificial Intelligence</h1>
      <p className="lead text-center mb-5">
        Discover how modern AI technologies like ChatGPT, DeepSeek, and others are shaping the future of interaction, creativity, and productivity.
      </p>
      <div className="row">
        {aiTopics.map((topic, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <Card className="h-100 shadow-sm">
              <CardBody>
                <CardTitle tag="h5">{topic.title}</CardTitle>
                <CardText>{topic.description}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtificialIntelligenceComponent;
