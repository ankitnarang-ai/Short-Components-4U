// terms.component.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatExpansionModule, CommonModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {
  today = new Date();

  termsSections = [
    {
      title: 'License & Usage',
      icon: 'license',
      content: [
        'The Angular Kanban component is provided under our standard license agreement. You may use this component in your projects subject to the terms outlined below.',
        'This license grants you the right to integrate, customize, and deploy the component within your Angular applications for both personal and commercial use.'
      ],
      subsections: [
        {
          title: 'Permitted Uses',
          content: 'Integration into Angular projects, customization of styling and functionality, deployment in production applications, and modification for specific business requirements.'
        },
        {
          title: 'Restrictions',
          content: 'Redistribution as a standalone product, reverse engineering for competitive purposes, or removal of attribution notices is prohibited.'
        }
      ]
    },
    {
      title: 'Component Functionality',
      icon: 'widgets',
      content: [
        'Our Kanban component provides drag-and-drop functionality, customizable columns, task management, and responsive design out of the box.',
        'Features include real-time updates, local storage persistence, custom styling options, and accessibility compliance.'
      ],
      list: [
        'Drag and drop cards between columns',
        'Customizable board layouts and themes',
        'Task editing and management capabilities',
        'Export and import functionality',
        'Mobile-responsive design',
        'Keyboard navigation support'
      ]
    },
    {
      title: 'Support & Updates',
      icon: 'support',
      content: [
        'Technical support is provided through our documentation portal and community forums. Regular updates include bug fixes, performance improvements, and new features.',
        'Major version updates may introduce breaking changes, which will be clearly documented in our migration guides.'
      ],
      subsections: [
        {
          title: 'Support Channels',
          content: 'Access support through GitHub issues, community Discord, documentation site, and email support for licensed users.'
        },
        {
          title: 'Update Policy',
          content: 'Minor updates are released monthly, major versions annually. All updates maintain backward compatibility within major versions.'
        }
      ]
    },
    {
      title: 'Data & Privacy',
      icon: 'privacy_tip',
      content: [
        'The component processes your board data locally within your application. No data is transmitted to external servers unless explicitly configured by you.',
        'Local storage is used for persistence, and you maintain full control over your data at all times.'
      ]
    },
    {
      title: 'Liability & Warranties',
      icon: 'security',
      content: [
        'The component is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of this component.',
        'Users are responsible for testing the component thoroughly in their specific environment before production deployment.'
      ]
    },
    {
      title: 'Termination',
      icon: 'block',
      content: [
        'This agreement remains in effect until terminated. You may terminate by discontinuing use and removing the component from your projects.',
        'We may terminate this agreement if you violate any terms, with immediate effect and without prior notice.'
      ]
    }
  ];
}