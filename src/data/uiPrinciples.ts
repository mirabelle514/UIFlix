import { UICategory, UIPrincipleDetail, Citation } from '../types';

export const categories: UICategory[] = [
  // Core Design Fundamentals
  {
    id: 'whitespace',
    title: 'White Space & Color Theory',
    description: 'Master the fundamentals of space and color in interface design',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'typography',
    title: 'Typography Principles',
    description: 'Create readable and beautiful text hierarchies',
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'hierarchy',
    title: 'Visual Hierarchy',
    description: 'Guide users attention through deliberate design choices',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'consistency',
    title: 'Consistency & Patterns',
    description: 'Build familiar and predictable user experiences',
    image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // User Experience & Interaction
  {
    id: 'navigation',
    title: 'Navigation Design',
    description: 'Create intuitive navigation systems that guide users effectively',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'interaction',
    title: 'Interaction Design',
    description: 'Design meaningful interactions that delight users',
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'forms',
    title: 'Form Design',
    description: 'Create user-friendly forms that convert and delight',
    image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'buttons',
    title: 'Button & CTA Design',
    description: 'Design compelling calls-to-action that drive engagement',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Layout & Structure
  {
    id: 'layout',
    title: 'Layout & Grid Systems',
    description: 'Master responsive layouts and grid-based design',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    description: 'Create seamless experiences across all devices',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'spacing',
    title: 'Spacing & Alignment',
    description: 'Use spacing systems to create visual rhythm and balance',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Visual Design Elements
  {
    id: 'icons',
    title: 'Icon Design',
    description: 'Create and use icons effectively in user interfaces',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'imagery',
    title: 'Images & Media',
    description: 'Integrate visual content that enhances user experience',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'branding',
    title: 'Brand Integration',
    description: 'Seamlessly integrate brand identity into interface design',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // User-Centered Design
  {
    id: 'accessibility',
    title: 'Accessibility Design',
    description: 'Create inclusive interfaces for all users',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'usability',
    title: 'Usability Principles',
    description: 'Design interfaces that are easy to learn and use',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'user-research',
    title: 'User Research & Testing',
    description: 'Validate design decisions through user insights',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Feedback & Communication
  {
    id: 'feedback',
    title: 'User Feedback',
    description: 'Provide clear responses to user interactions',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'errors',
    title: 'Error Handling',
    description: 'Design helpful error states and recovery flows',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'loading',
    title: 'Loading & Progress',
    description: 'Keep users informed during wait times and processes',
    image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Advanced Concepts
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'Build scalable and consistent design languages',
    image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    description: 'Create interactive prototypes to test and validate ideas',
    image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'animation',
    title: 'UI Animation',
    description: 'Use motion design to enhance user experience',
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Specialized Areas
  {
    id: 'mobile',
    title: 'Mobile UI Design',
    description: 'Design native and responsive mobile experiences',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'web',
    title: 'Web Interface Design',
    description: 'Master web-specific UI patterns and conventions',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'dashboard',
    title: 'Dashboard Design',
    description: 'Create effective data visualization and admin interfaces',
    image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce UI',
    description: 'Design conversion-focused shopping experiences',
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const uiPrinciples: UIPrincipleDetail[] = [
  {
    id: 'whitespace-fundamentals',
    title: 'White Space Fundamentals',
    category: 'whitespace',
    description: 'Understanding when and how to use white space effectively',
    content: `White space (also called negative space) is the area within a design that's intentionally left blank. It's one of the most powerful tools in UI design, serving multiple critical functions that directly impact user experience and interface effectiveness.

White space works by creating breathing room around elements, which reduces cognitive load and helps users process information more efficiently. Research shows that proper use of white space can increase comprehension by up to 20% and significantly improve user engagement.

There are two primary types of white space: micro and macro. Micro white space refers to the small spaces between letters, words, and lines of text, while macro white space encompasses the larger areas between major design elements, sections, and layout components.

The strategic use of white space creates visual hierarchy by establishing relationships between elements. When an element is surrounded by more white space, it naturally draws more attention and appears more important. This principle is fundamental to guiding user attention and creating effective call-to-action areas.

White space also contributes to brand perception. Luxury brands often use generous amounts of white space to convey elegance and sophistication, while cramped layouts can make interfaces feel overwhelming and unprofessional.`,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    examples: [
      'Apple\'s website uses generous white space around product images to create focus and premium feel',
      'Google\'s search page leverages white space to emphasize the search bar as the primary action',
      'Medium uses white space around articles to improve reading experience and reduce eye strain',
      'Stripe\'s pricing page uses white space to separate different plan tiers clearly',
      'Airbnb uses white space in property listings to make each listing easily scannable'
    ],
    keyPoints: [
      'White space increases reading comprehension by up to 20% according to UX research',
      'Micro white space (between letters, words, lines) affects readability and text flow',
      'Macro white space (between sections, elements) creates visual hierarchy and organization',
      'Active white space is intentionally used to create emphasis and guide attention',
      'Passive white space occurs naturally and provides necessary breathing room',
      'The 60-30-10 rule: 60% white space, 30% content, 10% accent elements for balanced layouts',
      'White space reduces cognitive load by helping users process information more efficiently'
    ],
    citations: [
      { id: 1, text: 'Paralect - 5 ways to design better white space in your product UI', url: 'https://www.paralect.com/blog/post/5-ways-to-design-better-white-space-in-your-product-ui' },
      { id: 2, text: 'AppVenturez - Why white space is important in design', url: 'https://www.appventurez.com/blog/why-white-space-is-important-in-design' },
      { id: 3, text: 'Venngage - White space design guide', url: 'https://venngage.com/blog/white-space-design/' },
      { id: 4, text: 'Nielsen Norman Group - The Power of White Space', url: 'https://www.nngroup.com/articles/whitespace/' }
    ]
  },
  {
    id: 'color-theory-basics',
    title: 'Color Theory in UI Design',
    category: 'whitespace',
    description: 'Framework for using colors to achieve harmony and direct emotions',
    content: `Color theory in UI design is a comprehensive framework that governs how colors interact, influence user behavior, and create meaningful visual experiences. Understanding color theory is essential for creating interfaces that not only look appealing but also function effectively to guide user actions and communicate information.

The foundation of digital color theory rests on the RGB (Red, Green, Blue) color model, where colors are created by combining different intensities of these three primary colors. Each color has three key properties: hue (the color itself), saturation (intensity or purity), and lightness (how light or dark the color appears).

Color psychology plays a crucial role in UI design. Different colors evoke specific emotional responses and cultural associations. Red typically signals urgency, danger, or importance, making it ideal for error messages and critical actions. Blue conveys trust, stability, and professionalism, which is why it's widely used by financial institutions and social media platforms. Green represents success, growth, and positive actions, commonly used for confirmation messages and call-to-action buttons.

Effective color schemes follow established patterns: monochromatic (variations of a single color), analogous (colors adjacent on the color wheel), complementary (opposite colors), and triadic (three evenly spaced colors). Each scheme serves different purposes and creates distinct visual effects.

Accessibility is paramount in color selection. The Web Content Accessibility Guidelines (WCAG) require a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text to ensure readability for users with visual impairments. Color should never be the sole method of conveying information, as approximately 8% of men and 0.5% of women have some form of color vision deficiency.`,
    image: 'https://images.pexels.com/photos/1325720/pexels-photo-1325720.jpeg?auto=compress&cs=tinysrgb&w=800',
    examples: [
      'Facebook uses blue as its primary color to convey trust and reliability in social networking',
      'Spotify uses green to represent play, growth, and positive music experiences',
      'Netflix uses red to create excitement and urgency around entertainment content',
      'Slack uses a purple-blue palette to appear professional yet approachable for workplace communication',
      'Airbnb uses a warm coral color to evoke feelings of belonging and hospitality'
    ],
    keyPoints: [
      'RGB color model: Red, Green, Blue values from 0-255 create all digital colors',
      'HSL model (Hue, Saturation, Lightness) provides more intuitive color manipulation',
      '60-30-10 color rule: 60% dominant color, 30% secondary, 10% accent for balanced palettes',
      'WCAG AA compliance requires 4.5:1 contrast ratio for normal text, 3:1 for large text',
      'Color temperature affects mood: warm colors (red, orange, yellow) energize, cool colors (blue, green, purple) calm',
      'Cultural color associations vary globally: red means luck in China but danger in Western cultures',
      'Color blindness affects 8% of men and 0.5% of women, requiring accessible design considerations'
    ],
    citations: [
      { id: 9, text: 'CareerFoundry - Introduction to color theory and color palettes', url: 'https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/' },
      { id: 10, text: 'Ramotion - Color in UX design', url: 'https://www.ramotion.com/blog/color-in-ux-design/' },
      { id: 11, text: 'Figma - What is color theory?', url: 'https://www.figma.com/resource-library/what-is-color-theory/' },
      { id: 12, text: 'Adobe - Color Theory Fundamentals', url: 'https://www.adobe.com/creativecloud/design/discover/color-theory.html' }
    ]
  }
];

// Additional comprehensive UI principles based on foundational design concepts
const comprehensiveUIPrinciples: UIPrincipleDetail[] = [
  {
    id: 'micro-macro-whitespace',
    title: 'Micro and Macro White Space',
    category: 'whitespace',
    description: 'Understanding the difference between micro and macro white space and when to use each',
    content: `White space isn't just empty space—it's a powerful design tool that improves readability, creates visual hierarchy, and gives designs room to breathe. Understanding micro and macro white space is essential for creating balanced, professional interfaces.`,
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
    examples: [
      'Using micro white space between letters and lines for better text readability',
      'Applying macro white space around important elements to draw attention',
      'Creating clear separation between content sections with strategic spacing',
      'Using margins and padding to prevent cramped layouts'
    ],
    keyPoints: [
      'Micro white space refers to space between letters, words, and lines of text',
      'Macro white space refers to space between major layout elements and sections',
      'White space around important elements draws attention and creates focus',
      'Proper spacing prevents cramped layouts and reduces cognitive load',
      'White space creates visual balance and gives designs room to breathe'
    ],
    citations: [
      { id: 39, text: 'Interaction Design Foundation - The Power of White Space', url: 'https://www.interaction-design.org/literature/article/the-power-of-white-space' },
      { id: 40, text: 'UX Planet - White Space in UI Design', url: 'https://uxplanet.org/the-power-of-whitespace-a1a95e45f82b' }
    ]
  },
  {
    id: 'color-psychology-ui',
    title: 'Color Psychology in Interfaces',
    category: 'whitespace',
    description: 'How colors communicate meaning and create emotional responses in UI design',
    content: `Color communicates meaning, creates emotional responses, and establishes visual hierarchy. Understanding color psychology helps designers make intentional choices that support user goals and brand messaging.`,
    image: 'https://images.pexels.com/photos/1325720/pexels-photo-1325720.jpeg',
    examples: [
      'Using red for urgency, errors, and warnings',
      'Applying green for success, confirmation, and positive actions',
      'Leveraging blue for trust, professionalism, and primary actions',
      'Using gray for neutral states and disabled elements'
    ],
    keyPoints: [
      'Primary colors are your brand\'s main colors (typically 1-3)',
      'Secondary colors provide supporting variety in the interface',
      'Neutral colors (grays, whites, blacks) work for backgrounds and text',
      'Accent colors are bright colors used for calls-to-action and highlights',
      'Color psychology: Red (urgency), Green (success), Blue (trust), Yellow (caution)'
    ],
    citations: [
      { id: 41, text: 'UX Design - Color Psychology in UI', url: 'https://uxdesign.cc/color-psychology-in-ui-design' },
      { id: 42, text: 'Smashing Magazine - Color Theory for Designers', url: 'https://www.smashingmagazine.com/color-theory-for-designers/' }
    ]
  },
  {
    id: 'typography-readability',
    title: 'Typography and Readability',
    category: 'typography',
    description: 'Essential typography principles for creating readable and accessible interfaces',
    content: `Typography is the art and science of arranging type to make written language legible, readable, and appealing. In UI design, typography serves as both a functional tool for information delivery and a powerful element of visual design that shapes user perception and experience.

Readability is the ease with which a reader can understand written text, while legibility refers to how easily individual characters can be distinguished. Both are crucial for effective UI design, as poor typography can create barriers to user engagement and task completion.

The anatomy of typography includes several key measurements: font size (measured in points or pixels), line height (leading), letter spacing (tracking), and word spacing. The relationship between these elements determines the overall readability and visual appeal of text.

Font selection significantly impacts user experience. Serif fonts, with their decorative strokes, are traditionally better for long-form reading in print but can appear cluttered on screens. Sans-serif fonts, without decorative elements, generally perform better in digital interfaces due to their clean appearance at various screen resolutions.

Responsive typography adapts to different screen sizes and viewing conditions. This involves not just scaling font sizes but also adjusting line heights, spacing, and even font weights to maintain optimal readability across devices.

Typography hierarchy uses size, weight, color, and spacing to organize information and guide users through content. A well-established hierarchy helps users quickly scan and understand content structure, improving both usability and accessibility.`,
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
    examples: [
      'Medium uses Georgia serif font for articles to enhance reading comfort and reduce eye strain',
      'Apple uses San Francisco font family across all interfaces for consistency and optimal screen rendering',
      'Google Material Design uses Roboto font with specific size and weight scales for clear hierarchy',
      'Stripe uses Inter font with generous line spacing for improved readability in financial interfaces',
      'GitHub uses system fonts for code display to ensure maximum legibility for developers'
    ],
    keyPoints: [
      'Optimal line height is 1.4-1.6x the font size for body text, 1.2-1.3x for headings',
      'Ideal line length is 45-75 characters (including spaces) for comfortable reading',
      'Font size should be minimum 16px for body text on mobile devices',
      'Contrast ratio must meet WCAG standards: 4.5:1 for normal text, 3:1 for large text',
      'Typography scale should follow mathematical ratios (1.125, 1.25, 1.333) for harmonious sizing',
      'System fonts load faster and provide better performance than web fonts',
      'Font loading strategies (font-display: swap) prevent invisible text during font load'
    ],
    citations: [
      { id: 43, text: 'Typography Handbook - Readability Guidelines', url: 'https://typographyhandbook.com/readability/' },
      { id: 44, text: 'A List Apart - Typography on the Web', url: 'https://alistapart.com/article/typography-on-the-web/' },
      { id: 45, text: 'Google Fonts - Typography Best Practices', url: 'https://fonts.google.com/knowledge' }
    ]
  },
  {
    id: 'visual-hierarchy-tools',
    title: 'Tools for Creating Visual Hierarchy',
    category: 'hierarchy',
    description: 'Using size, color, position, contrast, and white space to guide user attention',
    content: `Visual hierarchy guides users' attention through deliberate design choices. By understanding and applying hierarchy tools effectively, designers can create interfaces that naturally guide users toward important information and actions.`,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    examples: [
      'Making larger elements attract attention first through strategic sizing',
      'Using bright or contrasting colors to make important elements stand out',
      'Positioning key elements in the top-left area for Western reading patterns',
      'Creating high contrast to draw the eye to specific areas'
    ],
    keyPoints: [
      'Size: Larger elements naturally attract attention first',
      'Color: Bright or contrasting colors stand out from surrounding elements',
      'Position: Top-left gets noticed first in Western cultures',
      'Contrast: High contrast draws the eye and creates emphasis',
      'White space: Isolation emphasizes importance and creates focus'
    ],
    citations: [
      { id: 45, text: 'Nielsen Norman Group - Visual Hierarchy in UX', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/' },
      { id: 46, text: 'UX Planet - Visual Hierarchy Principles', url: 'https://uxplanet.org/visual-hierarchy-principles-in-ux-design' }
    ]
  },
  {
    id: 'grid-systems-composition',
    title: 'Grid Systems and Composition',
    category: 'layout',
    description: 'Using grids and alignment principles to create structured, consistent layouts',
    content: `Grid systems provide structure and consistency in layout design. They create visual harmony, improve readability, and make responsive design more manageable by establishing consistent spacing and alignment rules.`,
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    examples: [
      'Using columns and rows to align elements systematically',
      'Maintaining consistent spacing between grid elements',
      'Breaking the grid intentionally to create emphasis',
      'Left-aligning body text for easy reading flow'
    ],
    keyPoints: [
      'Grid systems provide structure and consistency across layouts',
      'Use columns and rows to align elements systematically',
      'Maintain consistent spacing between grid elements for rhythm',
      'Break the grid intentionally for emphasis when needed',
      'Left-align body text for easy reading, center-align sparingly'
    ],
    citations: [
      { id: 47, text: 'A List Apart - Grid Systems in Web Design', url: 'https://alistapart.com/article/gridsystems/' },
      { id: 48, text: 'Smashing Magazine - Grid Design Principles', url: 'https://www.smashingmagazine.com/grid-design-principles/' }
    ]
  },
  {
    id: 'ux-consistency-patterns',
    title: 'UX Consistency and Patterns',
    category: 'consistency',
    description: 'Maintaining consistent patterns and following established UI conventions',
    content: `Consistency in user experience means maintaining uniform patterns for similar interactions, using the same visual elements throughout, and following established UI conventions that users already understand.`,
    image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
    examples: [
      'Maintaining consistent patterns for similar interactions across the interface',
      'Using the same colors, fonts, and spacing throughout the product',
      'Following established UI conventions that users expect',
      'Creating predictable navigation and interaction patterns'
    ],
    keyPoints: [
      'Maintain consistent patterns for similar interactions throughout',
      'Use the same colors, fonts, and spacing across all screens',
      'Follow established UI conventions that users already understand',
      'Create predictable navigation and interaction patterns',
      'Consistency reduces cognitive load and builds user confidence'
    ],
    citations: [
      { id: 49, text: 'Nielsen Norman Group - Consistency in UI Design', url: 'https://www.nngroup.com/articles/consistency-and-standards/' },
      { id: 50, text: 'Material Design - Consistency Guidelines', url: 'https://material.io/design/guidelines-overview' }
    ]
  },
  {
    id: 'feedback-affordances',
    title: 'Feedback and Affordances',
    category: 'feedback',
    description: 'Providing clear visual feedback and making interactive elements obvious',
    content: `Effective UI design provides immediate feedback for user actions and makes interactive elements clearly identifiable. This includes visual states, loading indicators, and clear affordances that guide user behavior.`,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    examples: [
      'Making buttons look clickable with shadows, borders, and hover states',
      'Providing immediate feedback for user actions and interactions',
      'Using loading states and progress indicators during wait times',
      'Creating clear visual states for different interaction modes'
    ],
    keyPoints: [
      'Buttons should look clickable with visual cues like shadows and borders',
      'Provide immediate feedback for all user actions and interactions',
      'Use loading states and progress indicators to manage expectations',
      'Create clear hover and active states for interactive elements',
      'Visual affordances help users understand what they can interact with'
    ],
    citations: [
      { id: 51, text: 'UX Design - Feedback in User Interfaces', url: 'https://uxdesign.cc/feedback-in-user-interfaces' },
      { id: 52, text: 'Interaction Design Foundation - Affordances', url: 'https://www.interaction-design.org/literature/topics/affordances' }
    ]
  },
  {
    id: 'accessibility-fundamentals-extended',
    title: 'Accessibility Design Fundamentals',
    category: 'accessibility',
    description: 'Creating inclusive interfaces that work for users with diverse abilities',
    content: `Accessibility in UI design ensures interfaces work for users with diverse abilities and disabilities. This includes keyboard navigation, screen reader compatibility, color contrast, and semantic HTML structure.`,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    examples: [
      'Ensuring keyboard navigation works for all interactive elements',
      'Providing descriptive alt text for images and visual content',
      'Using semantic HTML structure for screen reader compatibility',
      'Testing interfaces with actual screen reader software'
    ],
    keyPoints: [
      'Ensure keyboard navigation works for all interactive elements',
      'Provide alt text for images and meaningful visual content',
      'Use semantic HTML structure for proper screen reader support',
      'Test with screen readers and accessibility tools regularly',
      'Follow WCAG guidelines for color contrast and usability standards'
    ],
    citations: [
      { id: 53, text: 'WCAG 2.1 Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
      { id: 54, text: 'A11y Project - Web Accessibility', url: 'https://www.a11yproject.com/' }
    ]
  },
  {
    id: 'practical-application-tips',
    title: 'Practical UI Design Application',
    category: 'usability',
    description: 'Real-world tips for applying UI design principles effectively',
    content: `Effective UI design balances visual appeal with usability, ensuring design choices serve user goals. These practical tips help designers apply foundational principles in real-world projects.`,
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
    examples: [
      'Starting with function: solving user problems before focusing on aesthetics',
      'Using mobile-first approach: designing for small screens then scaling up',
      'Optimizing performance: ensuring images and animations load quickly',
      'Testing early and often: getting user feedback throughout the design process'
    ],
    keyPoints: [
      'Start with function: solve the user\'s problem first, then make it beautiful',
      'Mobile-first approach: design for small screens first, then scale up',
      'Performance matters: optimize images and animations for fast loading',
      'Test early and often: get user feedback throughout the design process',
      'Progressive disclosure: show only what users need at each step'
    ],
    citations: [
      { id: 55, text: 'UX Design - Practical Design Tips', url: 'https://uxdesign.cc/practical-ui-design-tips' },
      { id: 56, text: 'Smashing Magazine - UI Design Best Practices', url: 'https://www.smashingmagazine.com/ui-design-best-practices/' }
    ]
  }
];

// Add more detailed principles for each category
export const allUIPrinciples: UIPrincipleDetail[] = [
  ...uiPrinciples,
  ...comprehensiveUIPrinciples,
  // Typography Principles
  {
    id: 'typography-hierarchy',
    title: 'Typography Hierarchy',
    category: 'typography',
    description: 'Creating clear information hierarchy through font choices',
    content: `Typography hierarchy is the system of organizing text to guide readers through content in order of importance. It uses variations in font size, weight, color, and spacing to create visual distinction between different levels of information.`,
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
    examples: [
      'Using larger, bolder fonts for main headlines',
      'Consistent sizing for similar content types',
      'Proper line spacing for readability',
      'Color contrast to emphasize important text'
    ],
    keyPoints: [
      'Establishes clear reading order and content structure',
      'Improves scannability and user comprehension',
      'Creates visual rhythm and flow through content',
      'Supports accessibility with proper contrast ratios',
      'Reinforces brand identity through consistent type choices'
    ],
    citations: [
      { id: 15, text: 'Typography Handbook - Hierarchy in Typography', url: 'https://typographyhandbook.com' },
      { id: 16, text: 'Smashing Magazine - Typography Guidelines', url: 'https://www.smashingmagazine.com/typography-guidelines/' }
    ]
  },
  {
    id: 'font-pairing',
    title: 'Font Pairing & Selection',
    category: 'typography',
    description: 'Choosing and combining fonts for optimal readability and brand expression',
    content: `Font pairing involves selecting complementary typefaces that work harmoniously together while serving different purposes in your interface. Good font combinations create contrast without conflict, establishing clear hierarchy while maintaining visual cohesion.`,
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
    examples: [
      'Pairing serif headlines with sans-serif body text',
      'Using font weight variations within the same family',
      'Combining geometric and humanist sans-serif fonts',
      'Limiting to 2-3 font families maximum per interface'
    ],
    keyPoints: [
      'Contrast creates visual interest and hierarchy',
      'Consistency in font choices builds brand recognition',
      'Readability should always be the primary concern',
      'Consider font loading performance on web platforms',
      'Test font combinations across different devices and sizes'
    ],
    citations: [
      { id: 25, text: 'Google Fonts - Font Pairing Guide', url: 'https://fonts.google.com/knowledge' },
      { id: 26, text: 'Typewolf - Font Pairing Inspiration', url: 'https://www.typewolf.com/' }
    ]
  },
  
  // Navigation Design
  {
    id: 'navigation-patterns',
    title: 'Navigation Patterns',
    category: 'navigation',
    description: 'Understanding common navigation patterns and when to use them',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Navigation patterns are established UI conventions that help users move through digital products efficiently. Understanding when and how to implement different navigation patterns is crucial for creating intuitive user experiences.`,
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    examples: [
      'Top navigation bars for primary site sections',
      'Sidebar navigation for complex applications',
      'Breadcrumb navigation for deep hierarchies',
      'Tab navigation for related content sections'
    ],
    keyPoints: [
      'Choose patterns based on content structure and user needs',
      'Maintain consistency across similar navigation elements',
      'Provide clear visual indicators for current location',
      'Ensure navigation is accessible via keyboard and screen readers',
      'Test navigation patterns with real users for usability'
    ],
    citations: [
      { id: 27, text: 'Nielsen Norman Group - Navigation Design', url: 'https://www.nngroup.com/articles/navigation-design/' },
      { id: 28, text: 'UX Planet - Navigation Patterns', url: 'https://uxplanet.org/navigation-patterns' }
    ]
  },
  
  // Form Design
  {
    id: 'form-usability',
    title: 'Form Usability',
    category: 'forms',
    description: 'Design forms that are easy to complete and reduce user friction',
    content: `Form usability focuses on reducing cognitive load and friction in form completion. Well-designed forms guide users through the process smoothly, provide helpful feedback, and minimize errors through thoughtful design decisions.`,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    examples: [
      'Single-column layouts for better completion rates',
      'Clear, descriptive field labels above input fields',
      'Inline validation with helpful error messages',
      'Progressive disclosure for complex multi-step forms'
    ],
    keyPoints: [
      'Minimize the number of required fields',
      'Use appropriate input types for different data',
      'Provide clear visual feedback for form states',
      'Group related fields logically together',
      'Make error messages specific and actionable'
    ],
    citations: [
      { id: 29, text: 'Baymard Institute - Form Usability', url: 'https://baymard.com/blog/form-usability' },
      { id: 30, text: 'UX Movement - Form Design Best Practices', url: 'https://uxmovement.com/forms/' }
    ]
  },
  
  // Button Design
  {
    id: 'button-hierarchy',
    title: 'Button Hierarchy & States',
    category: 'buttons',
    description: 'Create clear button hierarchies and interactive states',
    content: `Button hierarchy establishes the relative importance of different actions through visual design. Primary, secondary, and tertiary button styles guide users toward desired actions while providing clear feedback through various interactive states.`,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    examples: [
      'Primary buttons for main actions (submit, purchase)',
      'Secondary buttons for alternative actions (cancel, back)',
      'Ghost buttons for subtle actions (learn more, details)',
      'Disabled states for unavailable actions'
    ],
    keyPoints: [
      'Use color and contrast to establish action priority',
      'Provide clear hover and active states for feedback',
      'Ensure buttons are large enough for touch targets',
      'Use consistent button styles throughout the interface',
      'Make button text clear and action-oriented'
    ],
    citations: [
      { id: 31, text: 'Material Design - Button Guidelines', url: 'https://material.io/components/buttons' },
      { id: 32, text: 'UX Planet - Button Design Best Practices', url: 'https://uxplanet.org/button-design-best-practices' }
    ]
  },
  
  // Layout & Grid Systems
  {
    id: 'grid-systems',
    title: 'Grid Systems',
    category: 'layout',
    description: 'Use grid systems to create structured, consistent layouts',
    content: `Grid systems provide a framework for organizing content in a structured, predictable way. They create visual harmony, improve readability, and make responsive design more manageable by establishing consistent spacing and alignment rules.`,
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    examples: [
      '12-column grids for flexible web layouts',
      '8-point grid systems for consistent spacing',
      'Modular grids for content-heavy interfaces',
      'Baseline grids for typography alignment'
    ],
    keyPoints: [
      'Grids create visual order and consistency',
      'Flexible grids adapt to different screen sizes',
      'Consistent spacing improves visual rhythm',
      'Grid systems speed up design and development',
      'Breaking the grid can create emphasis when done intentionally'
    ],
    citations: [
      { id: 33, text: 'A List Apart - Grid Systems', url: 'https://alistapart.com/article/gridsystems/' },
      { id: 34, text: 'Smashing Magazine - Grid Design', url: 'https://www.smashingmagazine.com/grid-design/' }
    ]
  },
  
  // Responsive Design
  {
    id: 'mobile-first',
    title: 'Mobile-First Design',
    category: 'responsive',
    description: 'Design for mobile devices first, then scale up to larger screens',
    content: `Mobile-first design is an approach that starts with designing for the smallest screen size and progressively enhances the experience for larger screens. This ensures optimal performance and usability across all devices.`,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    examples: [
      'Designing touch-friendly interfaces from the start',
      'Prioritizing essential content for small screens',
      'Using progressive enhancement for larger screens',
      'Optimizing images and assets for mobile performance'
    ],
    keyPoints: [
      'Mobile usage continues to grow globally',
      'Constraints force focus on essential features',
      'Better performance on all devices',
      'Easier to scale up than scale down',
      'Improves accessibility and usability'
    ],
    citations: [
      { id: 35, text: 'A Book Apart - Mobile First', url: 'https://abookapart.com/products/mobile-first' },
      { id: 36, text: 'Smashing Magazine - Mobile First Design', url: 'https://www.smashingmagazine.com/mobile-first-design/' }
    ]
  },
  
  // Design Systems
  {
    id: 'component-libraries',
    title: 'Component Libraries',
    category: 'design-systems',
    description: 'Build reusable component libraries for consistent interfaces',
    content: `Component libraries are collections of reusable UI elements that maintain consistency across products and teams. They include design specifications, code implementations, and usage guidelines for each component.`,
    image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg',
    examples: [
      'Button components with multiple variants and states',
      'Form input components with validation patterns',
      'Card components for content display',
      'Navigation components with responsive behavior'
    ],
    keyPoints: [
      'Consistency across products and teams',
      'Faster development and design processes',
      'Easier maintenance and updates',
      'Better collaboration between design and development',
      'Scalable design solutions for growing products'
    ],
    citations: [
      { id: 37, text: 'Design Systems Handbook', url: 'https://www.designsystems.com/' },
      { id: 38, text: 'Atomic Design - Brad Frost', url: 'https://atomicdesign.bradfrost.com/' }
    ]
  },
  {
    id: 'visual-hierarchy-principles',
    title: 'Visual Hierarchy Fundamentals',
    category: 'hierarchy',
    description: 'Guiding user attention through deliberate design choices',
    content: `Visual hierarchy is the arrangement of elements in a way that implies importance. It guides users through content by using size, color, contrast, spacing, and positioning to create a clear path for the eye to follow.`,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    examples: [
      'Larger elements appear more important',
      'High contrast draws immediate attention',
      'Strategic use of white space for emphasis',
      'Consistent patterns for similar content types'
    ],
    keyPoints: [
      'Size and scale create immediate visual weight',
      'Color and contrast direct user focus',
      'Position and alignment establish reading patterns',
      'Consistency helps users predict interface behavior',
      'Progressive disclosure prevents information overload'
    ],
    citations: [
      { id: 17, text: 'UX Planet - Visual Hierarchy Guide', url: 'https://uxplanet.org/visual-hierarchy-guide' },
      { id: 18, text: 'Nielsen Norman Group - Visual Hierarchy', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/' }
    ]
  },
  {
    id: 'consistency-patterns',
    title: 'Consistency & Design Patterns',
    category: 'consistency',
    description: 'Building familiar and predictable user experiences',
    content: `Consistency in UI design means maintaining uniform patterns, behaviors, and visual elements throughout an interface. It reduces cognitive load by allowing users to apply learned behaviors across different parts of the system.`,
    image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
    examples: [
      'Consistent button styles and behaviors',
      'Uniform spacing and alignment patterns',
      'Standardized color usage for similar functions',
      'Predictable navigation and interaction patterns'
    ],
    keyPoints: [
      'Reduces learning curve for new users',
      'Builds user confidence and trust',
      'Improves efficiency through predictable patterns',
      'Creates cohesive brand experience',
      'Facilitates easier maintenance and updates'
    ],
    citations: [
      { id: 19, text: 'Design Systems Handbook - Consistency', url: 'https://www.designsystems.com/consistency' },
      { id: 20, text: 'Material Design - Consistency Guidelines', url: 'https://material.io/design/guidelines-overview' }
    ]
  },
  {
    id: 'accessibility-fundamentals',
    title: 'Accessibility Design Fundamentals',
    category: 'accessibility',
    description: 'Creating inclusive interfaces for all users',
    content: `Accessibility in UI design ensures that interfaces can be used by people with various abilities and disabilities. This includes visual, auditory, motor, and cognitive considerations that make digital products usable by everyone.`,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    examples: [
      'Sufficient color contrast for text readability',
      'Keyboard navigation for all interactive elements',
      'Alt text for images and visual content',
      'Clear focus indicators and error messages'
    ],
    keyPoints: [
      'WCAG guidelines provide accessibility standards',
      'Color contrast ratios ensure readability',
      'Keyboard navigation supports motor disabilities',
      'Screen reader compatibility aids visual impairments',
      'Clear language helps cognitive accessibility'
    ],
    citations: [
      { id: 21, text: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
      { id: 22, text: 'A11y Project - Accessibility Guide', url: 'https://www.a11yproject.com/' }
    ]
  },
  {
    id: 'user-feedback-systems',
    title: 'User Feedback Systems',
    category: 'feedback',
    description: 'Providing clear responses to user interactions',
    content: `User feedback systems communicate the results of user actions through visual, auditory, or haptic responses. Effective feedback helps users understand system status, confirms actions, and guides next steps.`,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    examples: [
      'Loading states during data processing',
      'Success messages after form submission',
      'Error states with clear correction guidance',
      'Hover effects on interactive elements'
    ],
    keyPoints: [
      'Immediate feedback confirms user actions',
      'Progress indicators manage user expectations',
      'Error messages should be helpful, not punitive',
      'Micro-interactions enhance user engagement',
      'Consistent feedback patterns build user confidence'
    ],
    citations: [
      { id: 23, text: 'UX Design - Feedback Principles', url: 'https://uxdesign.cc/feedback-principles' },
      { id: 24, text: 'Interaction Design Foundation - Feedback', url: 'https://www.interaction-design.org/literature/topics/feedback' }
    ]
  }
];

export const citations: Citation[] = [
  { id: 1, text: 'Paralect - 5 ways to design better white space in your product UI', url: 'https://www.paralect.com/blog/post/5-ways-to-design-better-white-space-in-your-product-ui' },
  { id: 2, text: 'AppVenturez - Why white space is important in design', url: 'https://www.appventurez.com/blog/why-white-space-is-important-in-design' },
  { id: 3, text: 'Venngage - White space design guide', url: 'https://venngage.com/blog/white-space-design/' },
  { id: 4, text: 'UX Design - Whitespace in UI design', url: 'https://uxdesign.cc/whitespace-in-ui-design-44e332c8e4a' },
  { id: 5, text: 'Interaction Design Foundation - The power of white space', url: 'https://www.interaction-design.org/literature/article/the-power-of-white-space' },
  { id: 6, text: 'Think.Design - The power of white space in design', url: 'https://think.design/blog/the-power-of-white-space-in-design/' },
  { id: 7, text: 'UX Design - Three principles for using white space', url: 'https://uxdesign.cc/the-three-most-important-principles-for-using-white-space-in-your-designs-and-in-your-life-df2fa00682d' },
  { id: 8, text: 'Flux Academy - The importance of whitespace in design', url: 'https://www.flux-academy.com/blog/the-importance-of-whitespace-in-design-with-examples' },
  { id: 9, text: 'CareerFoundry - Introduction to color theory and color palettes', url: 'https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/' },
  { id: 10, text: 'Ramotion - Color in UX design', url: 'https://www.ramotion.com/blog/color-in-ux-design/' },
  { id: 11, text: 'Figma - What is color theory?', url: 'https://www.figma.com/resource-library/what-is-color-theory/' },
  { id: 12, text: 'Interaction Design Foundation - UI color palette', url: 'https://www.interaction-design.org/literature/article/ui-color-palette' },
  { id: 13, text: 'Design+Code - Color theory', url: 'https://designcode.io/color-theory/' },
  { id: 14, text: 'Reddit - Color theory in UX', url: 'https://www.reddit.com/r/UXDesign/comments/135t3dn/color_theory_in_ux/' },
  { id: 15, text: 'Typography Handbook - Hierarchy in Typography', url: 'https://typographyhandbook.com' },
  { id: 16, text: 'Smashing Magazine - Typography Guidelines', url: 'https://www.smashingmagazine.com/typography-guidelines/' },
  { id: 17, text: 'UX Planet - Visual Hierarchy Guide', url: 'https://uxplanet.org/visual-hierarchy-guide' },
  { id: 18, text: 'Nielsen Norman Group - Visual Hierarchy', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/' },
  { id: 19, text: 'Design Systems Handbook - Consistency', url: 'https://www.designsystems.com/consistency' },
  { id: 20, text: 'Material Design - Consistency Guidelines', url: 'https://material.io/design/guidelines-overview' },
  { id: 21, text: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
  { id: 22, text: 'A11y Project - Accessibility Guide', url: 'https://www.a11yproject.com/' },
  { id: 23, text: 'UX Design - Feedback Principles', url: 'https://uxdesign.cc/feedback-principles' },
  { id: 24, text: 'Interaction Design Foundation - Feedback', url: 'https://www.interaction-design.org/literature/topics/feedback' },
  { id: 25, text: 'Google Fonts - Font Pairing Guide', url: 'https://fonts.google.com/knowledge' },
  { id: 26, text: 'Typewolf - Font Pairing Inspiration', url: 'https://www.typewolf.com/' },
  { id: 27, text: 'Nielsen Norman Group - Navigation Design', url: 'https://www.nngroup.com/articles/navigation-design/' },
  { id: 28, text: 'UX Planet - Navigation Patterns', url: 'https://uxplanet.org/navigation-patterns' },
  { id: 29, text: 'Baymard Institute - Form Usability', url: 'https://baymard.com/blog/form-usability' },
  { id: 30, text: 'UX Movement - Form Design Best Practices', url: 'https://uxmovement.com/forms/' },
  { id: 31, text: 'Material Design - Button Guidelines', url: 'https://material.io/components/buttons' },
  { id: 32, text: 'UX Planet - Button Design Best Practices', url: 'https://uxplanet.org/button-design-best-practices' },
  { id: 33, text: 'A List Apart - Grid Systems', url: 'https://alistapart.com/article/gridsystems/' },
  { id: 34, text: 'Smashing Magazine - Grid Design', url: 'https://www.smashingmagazine.com/grid-design/' },
  { id: 35, text: 'A Book Apart - Mobile First', url: 'https://abookapart.com/products/mobile-first' },
  { id: 36, text: 'Smashing Magazine - Mobile First Design', url: 'https://www.smashingmagazine.com/mobile-first-design/' },
  { id: 37, text: 'Design Systems Handbook', url: 'https://www.designsystems.com/' },
  { id: 38, text: 'Atomic Design - Brad Frost', url: 'https://atomicdesign.bradfrost.com/' },
  { id: 39, text: 'Interaction Design Foundation - The Power of White Space', url: 'https://www.interaction-design.org/literature/article/the-power-of-white-space' },
  { id: 40, text: 'UX Planet - White Space in UI Design', url: 'https://uxplanet.org/the-power-of-whitespace-a1a95e45f82b' },
  { id: 41, text: 'UX Design - Color Psychology in UI', url: 'https://uxdesign.cc/color-psychology-in-ui-design' },
  { id: 42, text: 'Smashing Magazine - Color Theory for Designers', url: 'https://www.smashingmagazine.com/color-theory-for-designers/' },
  { id: 43, text: 'Typography Handbook - Readability Guidelines', url: 'https://typographyhandbook.com/readability/' },
  { id: 44, text: 'A List Apart - Typography on the Web', url: 'https://alistapart.com/article/typography-on-the-web/' },
  { id: 45, text: 'Nielsen Norman Group - Visual Hierarchy in UX', url: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/' },
  { id: 46, text: 'UX Planet - Visual Hierarchy Principles', url: 'https://uxplanet.org/visual-hierarchy-principles-in-ux-design' },
  { id: 47, text: 'A List Apart - Grid Systems in Web Design', url: 'https://alistapart.com/article/gridsystems/' },
  { id: 48, text: 'Smashing Magazine - Grid Design Principles', url: 'https://www.smashingmagazine.com/grid-design-principles/' },
  { id: 49, text: 'Nielsen Norman Group - Consistency in UI Design', url: 'https://www.nngroup.com/articles/consistency-and-standards/' },
  { id: 50, text: 'Material Design - Consistency Guidelines', url: 'https://material.io/design/guidelines-overview' },
  { id: 51, text: 'UX Design - Feedback in User Interfaces', url: 'https://uxdesign.cc/feedback-in-user-interfaces' },
  { id: 52, text: 'Interaction Design Foundation - Affordances', url: 'https://www.interaction-design.org/literature/topics/affordances' },
  { id: 53, text: 'WCAG 2.1 Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
  { id: 54, text: 'A11y Project - Web Accessibility', url: 'https://www.a11yproject.com/' },
  { id: 55, text: 'UX Design - Practical Design Tips', url: 'https://uxdesign.cc/practical-ui-design-tips' },
  { id: 56, text: 'Smashing Magazine - UI Design Best Practices', url: 'https://www.smashingmagazine.com/ui-design-best-practices/' }
];