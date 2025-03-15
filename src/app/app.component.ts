import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  logo: string = 'https://shortcomponents4u-logo.s3.eu-north-1.amazonaws.com/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVYV52BRFPD2KHK6T%2F20250315%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250315T181319Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAqN0rhG1n5u%2FsV8k9PfX8UM%2BWIJfXgRkwQLaJYJ72EaICIQDenUOC%2FRH6ZZmun2tzjqdsRf3gjQYmhk8zYnthx906fSroAggbEAAaDDM5NjYwODgwMTg2NiIM%2FuccbUNQ3UTJnSqSKsUC66f5lGUfcQ%2FM9g0LXTCZbolV0KAxflRw5iuUmxbWXgkhfv3K4F66NB0N2SDOPVCjNZRwvl6nCBu8ZPBPbPP2FukIFoefCefzVYT%2FMe%2F9902r0pNvZrvMV56Hz6Gs4nKgC9kbLSaOPOCdRrXzO9Nx8yhtgujQIc5DrfyJX9crjTkGfGqlBau13ndEpwOPSIvQ4xeuvDodAa0kltoz%2BlvcVH6RErpM4abUpEUbD4lES7WmiBHtBo%2F6%2B%2FT56Ilxz7NiimY6xqtbvXyAp9nguikHFGwURU1ca18iE%2F0why3pXaxRrchwNTpPBGWS8zVxuhOITXaozDd%2B3ruScSz%2Fs42ITMSnrdWb0Au3ydzZny78WM3HTYS1J12rPxbH0fA3NUYdPdlIHb%2FVslus%2BD5NmTrib0AAfal%2BGs%2B0dqZtcj824Ole5SXOATC%2B%2B9a%2BBjqyAtx0drKNrR1QGO5QKRHG8UT0ACbXo8AXSxxsQ2hwSj4K%2FZo5HenmQL1Kq8R2oz1OVTZ5fv9JiP%2BjTr6xgCPTYO8m3GAU7y3Iz908Ve3jpQRQ4qKF8Ix%2FE%2FHB758v8KuTuq97M6rI%2B4ZuFbh%2Bf%2BfU5nmgXpygHRbpcDM3lQtAIVlL%2FRokDHpK%2BV0CovFCm80W16VlyGT%2Bz8Xr0KPITT6sGTd7kXe2h02Q1EGVCmXdIixHj5kACqX0N22q8bPZ00eMf4kxv2q7tnlKFekwOzdY3pAPe2QoTAbHkOUYuNCV0aN%2F%2Fqj9FxvatGIZpUVEZZh1%2BJoNkQId8dz9geyyvtWDdE2HmYr7vFzwvSwKnYSVjFAzog8a6bo%2FOzwxnbY02SC%2BBHpSR4l832T5EQNElY2gLtWqrQ%3D%3D&X-Amz-Signature=aabe75850bdb7a51ef23f7f1ec5b376f30a648af1661d23cb4e8c38ca5392f9f&X-Amz-SignedHeaders=host&response-content-disposition=inline';
}