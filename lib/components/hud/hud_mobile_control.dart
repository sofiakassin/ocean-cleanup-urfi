import 'dart:async';
import 'dart:ui' show Color, Paint;

import 'package:flutter/foundation.dart' show VoidCallback;
import 'package:flutter/painting.dart' show TextStyle, FontWeight;
import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/extensions.dart';
import 'package:flame/input.dart';

import '../../bloc/game_bloc_parameters.dart';
import '../../constants.dart';
import '../../mixins/update_mixin.dart';
import '../../core/game_scene.dart';
import '../player/player_controller.dart';

class HudMobileControl extends PositionComponent
    with HasGameRef<GameScene>, UpdateMixin {
  final GameBlocParameters blocParameters;
  final PlayerController? playerController;

  HudMobileControl({
    required this.blocParameters,
    this.playerController,
  });

  late Vector2 _gameSize;

  bool _moveUp = false;
  bool _moveDown = false;
  bool _moveLeft = false;
  bool _moveRight = false;

  @override
  FutureOr<void> onLoad() async {
    _gameSize = screenRatio.toVector2();

    await _showDirectionButtons();
    await _showCatchButton();

    return super.onLoad();
  }

  Future<void> _showDirectionButtons() async {
    final double buttonSize = _gameSize.x * 0.05;
    final Vector2 center = Vector2(-_gameSize.x * 0.24, _gameSize.y * 0.20);
    final double spacing = buttonSize * 1.05;

    await add(_buildArrowButton(
      icon: '↑',
      position: Vector2(center.x, center.y - spacing),
      onPressStart: () => _moveUp = true,
      onPressEnd: () => _moveUp = false,
    ));

    await add(_buildArrowButton(
      icon: '↓',
      position: Vector2(center.x, center.y + spacing),
      onPressStart: () => _moveDown = true,
      onPressEnd: () => _moveDown = false,
    ));

    await add(_buildArrowButton(
      icon: '←',
      position: Vector2(center.x - spacing, center.y),
      onPressStart: () => _moveLeft = true,
      onPressEnd: () => _moveLeft = false,
    ));

    await add(_buildArrowButton(
      icon: '→',
      position: Vector2(center.x + spacing, center.y),
      onPressStart: () => _moveRight = true,
      onPressEnd: () => _moveRight = false,
    ));
  }

  HudArrowButton _buildArrowButton({
    required String icon,
    required Vector2 position,
    required VoidCallback onPressStart,
    required VoidCallback onPressEnd,
  }) {
    return HudArrowButton(
      text: icon,
      position: position,
      size: Vector2.all(_gameSize.x * 0.05),
      onPressStart: onPressStart,
      onPressEnd: onPressEnd,
    );
  }

  Future<void> _showCatchButton() async {
    final spriteUp = Sprite(gameRef.images.fromCache(pathCatchButtonDefault));
    final spriteDown = Sprite(gameRef.images.fromCache(pathCatchButtonPressed));

    final button = SpriteButtonComponent(
      button: spriteUp,
      buttonDown: spriteDown,
      onPressed: () {
        playerController?.tryCatchTrash();
      },
      position: Vector2(_gameSize.x * 0.24, _gameSize.y * 0.17),
      size: Vector2.all(_gameSize.x * 0.07),
    );

    await add(button);
  }

  @override
  void runUpdate(double dt) {
    Vector2 direction = Vector2.zero();

    if (_moveUp) direction.y -= 1;
    if (_moveDown) direction.y += 1;
    if (_moveLeft) direction.x -= 1;
    if (_moveRight) direction.x += 1;

    if (direction != Vector2.zero()) {
      direction.normalize();
      playerController?.handleJoystickMovement(
        direction,
        direction.screenAngle(),
      );
    } else {
      playerController?.handleJoystickMovement(Vector2.zero(), 0);
    }
  }

  @override
  void onRemove() {
    _moveUp = false;
    _moveDown = false;
    _moveLeft = false;
    _moveRight = false;
    super.onRemove();
  }
}

class HudArrowButton extends PositionComponent with TapCallbacks {
  final String text;
  final VoidCallback onPressStart;
  final VoidCallback onPressEnd;

  late RectangleComponent _background;
  late TextComponent _label;

  HudArrowButton({
    required this.text,
    required Vector2 position,
    required Vector2 size,
    required this.onPressStart,
    required this.onPressEnd,
  }) {
    this.position = position;
    this.size = size;
    anchor = Anchor.center;
  }

  @override
  FutureOr<void> onLoad() async {
    _background = RectangleComponent(
      size: size,
      anchor: Anchor.center,
      position: size / 2,
      paint: Paint()..color = const Color(0x661E3A5F),
    );

    _label = TextComponent(
      text: text,
      anchor: Anchor.center,
      position: size / 2,
      textRenderer: TextPaint(
        style: TextStyle(
          color: const Color(0xFFFFFFFF),
          fontSize: 22,
          fontWeight: FontWeight.bold,
        ),
      ),
    );

    await add(_background);
    await add(_label);

    return super.onLoad();
  }

  @override
  void onTapDown(TapDownEvent event) {
    _background.paint.color = const Color(0xAA3D6FA3);
    onPressStart();
    super.onTapDown(event);
  }

  @override
  void onTapUp(TapUpEvent event) {
    _background.paint.color = const Color(0x661E3A5F);
    onPressEnd();
    super.onTapUp(event);
  }

  @override
  void onTapCancel(TapCancelEvent event) {
    _background.paint.color = const Color(0x661E3A5F);
    onPressEnd();
    super.onTapCancel(event);
  }
}