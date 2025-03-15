import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { KanbanBoardComponent, KanbanStateService } from 'angular-kanban';

@Component({
  selector: 'app-documentation',
  imports: [MatCardModule, MatListModule, RouterModule, KanbanBoardComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
})
export class DocumentationComponent {
  activeTab: 'installation' | 'usage' | 'demo' = 'installation';

  // Tabs configuration
  tabs: any = [
    { id: 'installation', label: 'Installation' },
    { id: 'usage', label: 'Usage Code' },
    { id: 'demo', label: 'Demo' },
  ];

  // Example code for the Usage Code tab
  codeExample = `
  import { KanbanBoardComponent, KanbanStateService } from 'angular-kanban'; // Import from ng-kanban

  @Component({
    selector: 'app-demo',
    standalone: true,
    imports: [KanbanBoardComponent, MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    board: any = {
      columns: [
        {
          id: 'todo',
          title: 'To Do',
          cards: [
            {
              id: 'card1',
              title: 'Design Homepage',
              description: 'Create wireframes and mockups for the homepage.',
            },
            {
              id: 'card2',
              title: 'Set Up CI/CD Pipeline',
              description: 'Configure GitHub Actions for automated deployments.',
            },
            {
              id: 'card3',
              title: 'Write User Documentation',
              description: 'Draft user guides for the new features.',
            },
          ],
        },
        {
          id: 'inProgress',
          title: 'In Progress',
          cards: [
            {
              id: 'card4',
              title: 'Implement Authentication',
              description: 'Add JWT-based authentication to the backend.',
            },
            {
              id: 'card5',
              title: 'Optimize Database Queries',
              description: 'Improve query performance for the reporting module.',
            },
          ],
        },
        {
          id: 'codeReview',
          title: 'Code Review',
          cards: [
            {
              id: 'card6',
              title: 'Refactor API Endpoints',
              description: 'Clean up and standardize API endpoints.',
            },
          ],
        },
        {
          id: 'done',
          title: 'Done',
          cards: [
            {
              id: 'card7',
              title: 'Deploy Initial Version',
              description: 'Deployed the first version of the application.',
            },
            {
              id: 'card8',
              title: 'Write Unit Tests',
              description: 'Added unit tests for core modules.',
            },
          ],
        },
      ],
    };

    constructor(private kanbanService: KanbanStateService) {}
    
    onCardClick(card: any) {
      console.log('Card clicked:', card);
      // You could show a modal or navigate to a details page
    }
    
    onCardMoved(event: any) {
      console.log('Card moved:', event);
      // Update the board data when a card is moved
      this.board = this.kanbanService.moveCard(
        this.board,
        event.cardId,
        event.sourceColumnId,
        event.targetColumnId
      );
    }
  }`;

  demoBoard: any = {
      columns: [
        {
          id: 'todo',
          title: 'To Do',
          cards: [
            {
              id: 'card1',
              title: 'Design Homepage',
              description: 'Create wireframes and mockups for the homepage.',
            },
            {
              id: 'card2',
              title: 'Set Up CI/CD Pipeline',
              description: 'Configure GitHub Actions for automated deployments.',
            },
            {
              id: 'card3',
              title: 'Write User Documentation',
              description: 'Draft user guides for the new features.',
            },
          ],
        },
        {
          id: 'inProgress',
          title: 'In Progress',
          cards: [
            {
              id: 'card4',
              title: 'Implement Authentication',
              description: 'Add JWT-based authentication to the backend.',
            },
            {
              id: 'card5',
              title: 'Optimize Database Queries',
              description: 'Improve query performance for the reporting module.',
            },
          ],
        },
        {
          id: 'codeReview',
          title: 'Code Review',
          cards: [
            {
              id: 'card6',
              title: 'Refactor API Endpoints',
              description: 'Clean up and standardize API endpoints.',
            },
          ],
        },
        {
          id: 'done',
          title: 'Done',
          cards: [
            {
              id: 'card7',
              title: 'Deploy Initial Version',
              description: 'Deployed the first version of the application.',
            },
            {
              id: 'card8',
              title: 'Write Unit Tests',
              description: 'Added unit tests for core modules.',
            },
          ],
        },
      ],
    };
  
    constructor(private kanbanService: KanbanStateService) {}
    
    onCardClick(card: any) {
      console.log('Card clicked:', card);
      // You could show a modal or navigate to a details page
    }
    
    onCardMoved(event: any) {
      console.log('Card moved:', event);
      // Update the board data when a card is moved
      this.demoBoard = this.kanbanService.moveCard(
        this.demoBoard,
        event.cardId,
        event.sourceColumnId,
        event.targetColumnId
      );
    }

    // Set the active tab
    setActiveTab(tabId: 'installation' | 'usage' | 'demo') {
      this.activeTab = tabId;
    }
}
